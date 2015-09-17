----  ----
name: HotChips2015 SDR Tutorial

---- #title ----
background-image:  /images/parallella_front_slant.png
----

## Implementing Software Defined Radio on the Parallella
by Andreas Olofsson (HOTCHIPS-2015)

---- #sdr ----

## What is Software Defined Radio? (SDR)

> "Radio in which some or all of the physical layer functions are software defined" --Wireless Innovation Forum

---- #em ----

## Not just "radio"!  
![](/images/em_waves.gif "width=800")

---- #sdr-arch ----

## Canonical SDR architecture
![](/images/sdr.png "width=800")

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
background-image:  /images/spectrum.jpg

## SDR Opportunities
(limited resource if there ever was one) 

---- #sdr-appliations ----

## SDR Application Examples
![](/images/satnogs.jpg "align=right width=500")
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
* Latency (microsecond)
* Throughput (gigabits) 
* Size, Weight, Power (SWAP)
* Cost ($20-->$30,000) 


----#parallella ----

## Parallella Introduction
![](/images/parallella_front.jpg "width=700")

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
![](/images/parallella_back.jpg "align=right width=450")
* 0.5mm Samtec connectors 
* 48-pin/24Gbps FPGA link
* 2 Epiphany links (20Gbps)
* JTAG, UART, I2C, SPDIF
* LVDS/CMOS  
* Adjustable I/O voltage    


----#porcupine ----
background-image: /images/porcupine.jpg

## Porcupine Breakout Board
* "Hackable", easy access 0.1" headers  
* Raspberry Pi camera connector  
* PMOD, JTAG, elink connectors  

----#parallella-sdr ----

## Parallella SDR Platform
![](/images/parallella_sdr.jpg "align=right width=500")
* 70MHz - 6GHz 
* [ADI FCOMMS* board (FMC)](http://wiki.analog.com/resources/eval/user-guides/ad-fmcomms3-ebz)
* Parallella carrier  
* FMC adapter board    
* 100% Open source SW    

----#ad9361 ----

## AD9361 Overview
![](/images/fcomms2.jpg "align=right width=500")
* RF 2 × 2 transceiver  
* 12-bit DACs and ADCs  
* 70 MHz to 6.0 GHz  
* TDD/FDD support  
* BW: <200 kHz to  56 MHz  
* Noise figure < 2.5 dB  
* Independent AGC  


----#parallella-sdr-arch ----
background-image:  /images/ad9361_sdr.jpg

## SDR Architecture
(RF + FPGA + CPU + DSP)    

----#zynq ----

## Xilinx Zynq SoC Architecture
![](/images/zynq.jpg "align=right height=450")
* **ARM SOC:**  
 -Dual A9 CPUs (up to 1GHz)  
 -GigE,USB,UART,I2C, ...  
 -Flash & DDR3 controller  
* **Programmable Logic:**   
 -I/O:  (86 --> 470)  
 -LUTS: (17 --> 277K)  
 -BRAM: (0.24MB --> 3MB)    

----#epiphany ----
background-image: /images/epiphany.jpg

## The Epiphany Architecture  
* 2D array of RISC cores (MIMD)  
* Mesh Network-On-Chip
* Point to point, scalable to "infinity"
* ANSI-C, MPI, OpenMP, OpenCL
* 50 GFLOPS/W in 28nm    

----#chip ----
background-image: /images/epiphanyIII.jpg

## Epiphany Chip Features
* 16 x 1GHz RISC processors (65nm)  
* 32 bit IEEE floating point  
* 512KB on-chip SRAM  
* North, East, West, South IO links 
* 32 GFLOPS peak performance  
* 512 GB/s local memory BW
* 128 GB/s NOC bandwidth  
* 8 GB/s IO bandwidth
  
----#cpu ----

## Epiphany RISC DSP  
* 32 bit, dual issue in order, 5/8 stage pipeline  
* 16/32 bit instruction set  
* 64 general purpose registers  
* IEEE754 floating point (FMADD,FMUL,..)  
* Nested interrupts, 2-Channel DMA, debug unit
* [ISA](http://adapteva.com/docs/epiphany_arch_refcard.pdf):  B, BL, JR, JAL, LDR, STR, TESTSET, ADD, SUB, ASR, LSR, LSL, ORR, AND, EOR, BITR, FADD, FSUB, FMUL, FMADD, FMSUB, FABS, FIX, FLOAT, MOV, MOVT, MOVFS, NOP, IDLE, RTS, RTI, GID, BKPT, TRAP, WAND, SYNC 

----#memory ----

## Epiphany Memory System
* 32 bit addressing
* Shared flat address space, no HW caches!  
* Upper 12 bits specify coordinates in 2D map (64 x 64 mesh)   
* 32KB SRAM per core in E16G301. Accessible by all cores.
* 4 independent 64 bit local memory transactions per cycle  
* Fetch, load, DMA, emesh supports 32 byte access per cycle
* Strict local memory ordering, VERY relaxed remote odering.   

----#emesh ----

## Epiphany Network-On-Chip
* 3 meshes: on-chip writes, read requests, off-chip writes  
* 104 bit atomic single cycle packets  
* Non-blocking round robin routing  
* x/y static routing  
* 8 bytes transfered per cycle (on chop write mesh)  
* 1.5 clock cycle latency / hop  
* Extends off chip to I/O (elinks)  
    
----#sdr-sw ----

## Parallella SDR Software  

----#SDR-Software ----

## Free Software Resources  
* [GNURadio](http://gnuradio.org/redmine/projects/gnuradio/wiki):  Open source SDR platform     
* [Epiphany SDK](https://github.com/adapteva/epiphany-sdk): Epiphany compiler, debugger  
* [Vivado](http://www.xilinx.com/products/design-tools/vivado.html): FPGA synthesis tools    
* [COPRTHR](http://www.browndeertechnology.com/coprthr.htm): OpenCL, MPI, Threads
* [OpenMP](http://www.browndeertechnology.com/coprthr.htm): OpenMP 4.0 device
* [PAL](https://github.com/parallella/pal): Optimized open source math/dsp library  

---- #sd-card ----

## Creating a Parallella SD card  
* [Download image](http://www.parallella.org/create-sdcard)
* Insert SD card in laptop  
```sh  
      $ gunzip -d <releasename>.img.gz  
$ df -h  
$ umount <sd-partition-path>  
$ sudo dd bs=4M if=<release-name>.img of=<sd-device-path>  
$ sync  
```  
* Remove SD card and insert into Parallella  

---- #vivado-install ----

## Install Vivado
* [Download Vivado from Xilinx](http://www.xilinx.com/support/download.html) (Choose the web installer)  

```sh     
$ sudo unlink /bin/sh 
$ ln -s /bin/bash /bin/sh
$ chmod u+x ./Xilinx_Vivado_SDK_2015.2_0626_1_Lin64.bin 
$ ./Xilinx_Vivado_SDK_2015.2_0626_1_Lin64.bin 
$ source 2015.2/settings64.csh

```

---- #gnu dependancies ----

## Install GNURadio Dependancies
```sh  
$ sudo apt-get -y install git-core cmake g++ python-dev swig \
pkg-config libfftw3-dev libboost1.55-all-dev libcppunit-dev \
libgsl0-dev libusb-dev  python-wxgtk2.8 \
python-numpy python-cheetah python-lxml doxygen libxi-dev \
python-sip libqwt-dev libfontconfig1-dev \
libxrender-dev python-sip python-sip-dev
```

---- #Download  ----

## Download GNU Radio (from ADI)

```sh  
$ sudo dd if=/dev/zero bs=1MiB of=/home/<user>/swap.img
$ sudo mkswap /home/<user>/swap.img
$ sudo swapon /home/<user>/swap.img
$ git clone https://github.com/analogdevicesinc/gnuradio.git
$ git clone https://github.com/analogdevicesinc/libiio.git
$ cd gnuradio
$ git checkout master
```

---- #Building  ----

## Building software

```sh
$ mkdir gnuradio/build; cd gnuradio/buid
$ cmake -DENABLE_DOXYGEN:bool=false ..
$ make -j2
$ sudo make install
$ sudo make -C gr-iio install
$ sudo ldconfig
$ cd ~/libiio
$ cmake ./
$ make all
$ sudo make install
```

---- #Shortcut  ----

## Shortcut...b/c life is too short

[PARALLELLA SDR IMAGE](ftp://ftp.parallella.org//ubuntu/dists/trusty/image/beta/ubuntu-14.04-headless-fmcomms-z7020-20150428.img.gz)  

---- ----

## REFERENCES  

[FMCOMMS3 User Guide (ADI)](http://wiki.analog.com/resources/eval/user-guides/ad-fmcomms3-ebz)  
[GNURadio Installation (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/gnuradio)  
[IIO-scope User Guide (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/iio_oscilloscope)  
[SD-CARD WIKI (ADI)](http://wiki.analog.com/resources/tools-software/linux-software/zynq_images#preparing_the_image)  
[ADI at FOSDEM](https://archive.fosdem.org/2015/schedule/event/iiosdr/attachments/slides/708/export/events/attachments/iiosdr/slides/708/fosdem_2015_iio_sdr.pdf)  


----#sdr-demo ----

## SDR demo
* FCOMMS2 + Adapter board + Parallella
* ARM + FPGA
* ADI Oscilloscope application
* ...


----#epiphany-fft ----

## Epiphany demo
Single core FFT prepared by Sylvain Munaut (SDR guru)
[Source code](https://github.com/parallella/parallella-examples/tree/master/vfft/src)  

| Platform        | Results
| ----------------|------------------
| fftw (ARM A9)   | 221.977509 Mflops
| fftw (A9-Neon)  | 409.619659 Mflops
| epiphany C      | 170.642029 Mflops
| epiphany ASM    | 668.507629 Mflops






 
