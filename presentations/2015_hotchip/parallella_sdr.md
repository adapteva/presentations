----  ----
# HOTCHIPS:

----#title ----
background-image:  /images/parallella_front_slant.png

## Implementing Software Defined Radio on the Parallella
by Andreas Olofsson (HOTCHIPS-2015)

---- #sdr ----

## What is Software Defined Radio? (SDR)

> "Radio in which some or all of the physical layer functions are software defined" --Wireless Innovation Forum

---- #cool ----

## Why SDR is so cool (&hot)!!
|                        | HW          | SDR           
|----------------------  |:-----------:|:-----------: 
| Compilation            | Months      | Minutes      
| Cost                   | $50K        | $500    
| Hurdle                 | RF, HW, SW  | SW
| Real time configurable | No          | Yes
| Future proof           | No          | yes      


---- #spectrum ----

## The Spectrum Exposed
![](/images/spectrum.jpg "align=left width=800")

---- #sdr-arch ----

## Canonical SDR architecture
![](/images/sdr.png "width=800")

---- #sdr-appliations ----

## SDR Application Examples
![](/images/satnogs.jpg "align=right width=400")
* Amateur radio (HAM, etc)  
* Radio astronomy  
* Legacy modem emulation 
* Wireless comms (GSM, LTE)  
* Wireless research (5G)  
* Spectrum analysis    
* Teaching DSP     
* Nasty stuff...  

---- #sdr-challenges ----

## SDR Challenges
![](/images/rtl-sdr.jpg "align=right width=400")
![](/images/expensive-sdr.jpg "align=right width=400")
* Latency (microsecond)
* Throughput (gigabits) 
* Size, Weight, Power (SWAP)
* Cost ($20-->$30,000) 

---- ----

## Parallella Introduction
![](/images/parallella_front.jpg "width=800")

---- #parallella-specs ----

## Parallella Specs (parallella.org)

|                        |     
|----------------------  |:----------:
| Performance            | ~30 GFLOPS   
| Memory                 |  1GB DDR3  
| IO                     | ~25 Gb/s (48 GPIO)     
| Size                   | credit-card    
| Weight                 | 38g        
| Power                  | <5W
| Cost                   | $99 -> $249

----#parallella-io ----

## Parallella IO
* 0.5mm Samtec connectors 
* One 48 pin FPGA connector (24Gbps) + 2 elinks (20Gbps)
* JTAG, UART, I2C, SPDIF
![](/images/parallella_back.jpg "align=right width=500")

----#porcupine ----
background-image: /images/porcupine.jpg

## Porcupine Breakout Board

* Easy access 0.1" headers  
* Raspberry Pi camera connector  
* PMOD, JTAG, elink connectors  

----#parallella-sdr ----

## Parallella SDR Platform
![](/images/parallella_sdr.jpg)
* AD9361 
* 
* 900Mb/s off-board 

----#zynq ----

## Zynq Architecture
![](/images/zynq.jpg "align=right height=400")
* **ARM SOC:**  
 -Dual A9 CPUs (up to 1GHz)  
 -GigE,USB,UART,CAN,I2C,SPI  
 -Flash & DDR3 controller  
* **Programmable Logic:**   
 -I/O:  86 --> 470   
 -LUTS: 17 --> 277K
 -BRAM: 0.24MB --> 3MB    

---- ----

## Slide 13: Zynq for SDR (via ADI)
![](/images/fcomms_arch.jpg "align=right")
* AXI SPI control  
* 2 * 6 bits @ 122.8MHz DDR LVDS
* AXI DMAC for RX/TX
* DDR DDS inside FPGA
* DC Filter Inside 
* FMC LPC Interface  

---- ----

## Epiphany Features
![](/images/fcomms_arch.jpg "align=right")
* 16 1GHz RISC processors
* C/C++ programmable
* 32 bit IEEE floating point
* 512KB on chip cache
* 42 GB/s links 
* 512 GB/s memory BW
---- ----

## Epiphany CPU
* 64 regs 
* interrupts 
* DMA/cpu 
* integer/float 

---- ----

## Epiphany ISA (table)
* show the picture  

---- ----

## Epiphany Memory System
* Shared flat address space
* 32KB / core
* 32 bit addressing
* Each core has unique addr range
* A maximum of 4096 cores
* local memory has 4 banks

---- ----

## Epiphany Network-On-Chip
* one transction / cycle  
* non-blocking routing  
* x/y static routing  
* 1.5ns latency / hop  
* 8 words / cycle

---- ----

## AD9361 Overview
* RF 2 × 2 transceiver  
* 12-bit DACs and ADCs  
* 70 MHz to 6.0 GHz  
* TDD/FDD support  
* BW: <200 kHz to  56 MHz  
* Noise figure < 2.5 dB  
* Independent AGC  

---- ----

---- ----

## Slide 11: Vivado Introduction
![](/images/vivado.jpg "align=right")

----#vivado ----

## Vivado Introduction
![](/images/vivado.jpg "align=right")

----#installation ----

## Installing The Software  

---- #vivado-install ----

## Install Vivado
* [Download Vivado from Xilinx](http://www.xilinx.com/support/download.html)
* Choose the web installer  

```bash     
$ sudo unlink /bin/sh 
$ ln -s /bin/bash /bin/sh
$ chmod u+x ./Xilinx_Vivado_SDK_2015.2_0626_1_Lin64.bin 
$ ./Xilinx_Vivado_SDK_2015.2_0626_1_Lin64.bin 
$ source 2015.2/settings64.csh

```

---- #gnu dependancies ----

## Install GNURadio Dependancies
```bash  
$ sudo apt-get -y install git-core cmake g++ python-dev swig \
pkg-config libfftw3-dev libboost1.55-all-dev libcppunit-dev \
libgsl0-dev libusb-dev libsdl1.2-dev python-wxgtk2.8 \
python-numpy python-cheetah python-lxml doxygen libxi-dev \
python-sip libqt4-opengl-dev libqwt-dev libfontconfig1-dev \
libxrender-dev python-sip python-sip-dev
```

---- #building  ----

## Building GNURadio (Be patient!)

```bash  
$ dd if=/dev/zero bs=1MiB count=2048 of=/home/analog/swap.img
$ sudo mkswap /home/analog/swap.img
$ sudo swapon /home/analog/swap.img
$ git clone https://github.com/analogdevicesinc/gnuradio.git
$ git checkout master
$ mkdir gnuradio/build; cd gnuradio/buid
$ cmake -DENABLE_DOXYGEN:bool=false ..
$ make -j2
$ sudo make install
$ sudo make -C gr-iio install
$ sudo ldconfig
```

----#libiio ----

## Installing "libiio"

```bash   
$ git clone https://github.com/analogdevicesinc/libiio.git
$ cd libiio
$ cmake ./
$ make all
$ sudo make install
```
---- ----

## REFERENCES  

[FMCOMMS3 User Guide (ADI)](http://wiki.analog.com/resources/eval/user-guides/ad-fmcomms3-ebz)  
[GNURadio Installation (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/gnuradio)  
[IIO-scope User Guide (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/iio_oscilloscope)  
[SD-CARD WIKI (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/zynq_images#preparing_the_image)  
---- ----

## Epiphany demo

---- ----

## SDR demo



 