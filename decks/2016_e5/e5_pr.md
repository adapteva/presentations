---- moore ----
name: Epiphany-V: A 1024 processor 64-bit RISC System-On-Chip

---- #title ----

![](/images/epiphanyIV.jpg)
## Epiphany-V: A 1024 processor 64-bit RISC System-On-Chip

---- #disclaimer -----

## Disclaimer

> This Epiphany-V research was developed with funding from the Defense Advanced Research Projects Agency (DARPA). The views, opinions and/or findings expressed are those of the author and should not be interpreted as representing the official views or policies of the Department of Defense or the U.S. Government.

---- #highlights -----

## Headlines
* "Startup builds a 1024-core 64-bit RISC microprocessor"
* "One guy in a garage takes on Intel"
* "Startup creates mobile supercomputing chip"
* "Startup tapes out 4.5B transistor chip in 24hr"
* "Startup reduces chip design costs by 100x"
* "Startup shows the path to exascale"
* "Startup improves microprocessor density by 80x"

---- #adapteva-history ----

## How we got here...

- 2008: Founded (Lexington, MA)
- 2011: 16-core 25 GFLOPS/W 65nm product
- 2012: 64-core 50 GFLOPS/W 28nm product
- 2012: Parallella $1M Kickstarter chip crowd funding
- 2014: Parallella shipped to over 10K users, 200 Universities
- 2016: Tapeout of Epiphany-V: 1024-core 64-bit processor



---- #epiphany-5 ----

## Epiphany-V Introduction

* TSMC 16FF,117mm^2, 4.5B transistors
* 1024 64-bit RISC processors
* 64/32-bit IEEE floating point support
* 64 MB on-chip SRAM
* Three 136-bit wide 2D mesh NOCs
* 1024 programmable I/O signals
* Support for up to 1 billion shared memory processors
* Extended ISA for deep learning, comms, crypto

---- #epiphany-pic ----

## Epiphany-V Diagram

![](/images/e5_epiphany.png "align=center height=400")

---- #chip1 -----

## E5 Layout
![](/images/e5_layout.png "align=center height=400")

---- #technical -----

## Epiphany-V Technical Advances
* Scalability
* Energy efficiency
* Low-power design
* Security
* Reliability
* Yields
* Design costs

---- #comparison-table2 -----

##  Processor Comparison Table

| Chip      |Company |Nodes|FLOPS |Area|Transistors|Power|Process|
|-----------|:------:|:---:|:----:|:--:|:---------:|:---:|:-----:|
| P100      |Nvidia  |56   |4.7T  |610 |15.3B      |250W |16FF+  |
| KNL       |Intel   |72   |3.6T  |683 |7.1B       |245W |14nm   |
| Broadwell |Intel   |24   |1.3T  |456 |7.2B       |145W |14nm   |
| Kilocore  |UC-Davis|1000 |N/A   |64  |0.6B       |39W  |32nm   |
| Epiphany  |Adapteva|1024 |2.0*F |117 |4.5B       |TBD  |16FF+  |

>> The first processor with 1024 64-bit RISC cores

---- #comparison-table3 -----

##  Compute Density Comparison (DPF)

| Chip       |  GFLOPS/mm^2 | GFLOPS/W | W/mm^2 |
|------------|--------------|----------|--------|
| KNL        |	5.27        | 14.69    | 0.35   |
| P100       |	7.7         | 18.8     | 0.40   |
| Broadwell  |	2.85        | 7.88     | 0.36   |
| Epiphany-V |  8.775       | TBD      | TBD    |
 
>> Shows that MIMD is more eficient than SIMD!

---- #comparison-table4 -----

##  Processor Density Comparison

| Chip       |  Nodes/mm^2  | MB RAM / mm^2 |
|------------|--------------|---------------|
| P100       |	0.09        | 0.034         |
| KNL        |	0.11        | 0.05          |
| Broadwell  |	0.05        | 0.15          |
| Epiphany-V |  8.75        | 0.54          |

>> An 80X advantage in processor density!

---- #comparison-table5 -----

##  Minimum Power

| Chip       |  Active | Standby |
|------------|---------|---------|
| P100       |	10W?   | >1w?    |
| KNL        |	10W?   | >1w?    |
| Broadwell  |	10W?   | >1W?    |
| Epiphany-V |  <<1W   | <<<1W   |

>> More than 100x advantage in standby power.

---- #conclusions -----

## Important Conclusions
* A 16nm ASIC can be done with less than $1M
* We are now in the era of the "thousand core processor"
* Low-cost design teams will disrupt the semi industry
* We have debunked the SIMD/GPU efficiency myth
* We have debunked the CPU inefficiency myth
* Manycore NOCs is the present & future of complex SOCs

---- #background -----

## BACKGROUND DATA

---- #market exa -----

## Exascale Market

![](/images/market_exa.png "align=center height=400")

---- #market iot -----

## IOT 2.0

![](/images/market_iot.png "align=center height=400")

---- #market mobile -----

## Mobile Market

![](/images/market_mobile.png "align=center height=400")

---- #data parallelism -----

## Epiphany Data Parallelism

![](/images/parallel_data.jpg "align=center height=400")

---- #task parallelism -----

## Epiphany Task Parallelism

![](/images/parallel_task.jpg "align=center height=400")

---- #pipeline parallelism -----

## Epiphany Pipeline Parallelism

![](/images/parallel_pipe.jpg "align=center height=400")

---- #parallella ----
background-image:  /images/parallella_front_slant.png

## Parallella

* Parallella: "The $99 supercomputer"
* 18 CPU cores + FPGA on a credit card @ 5W 
* Democratizes access to parallel computing
* $898K raised on Kickstarter in Oct 2012
* Open source and open access
* Generally available at Amazon & Digi-Key

---- #success ----
background-image: /images/parallella_stack.jpg

## Parallella Success Stories

* **Commercial**
  * Ericsson showed 25x efficiency edge over Intel
* **Govt**
  * ARL programmed Epiphany using efficient standard MPI
* **Academia**
  * ANU demonstrated 85% of peak performance, 100 pubs
* **Hackers**
  * S. Munaut showed that Epiphany core =~ 1.5x ARM-A9

---- #R&D chart ----
background-image: /images/epiphany_wirebond.jpg

## $2B+ of Parallel Architecture R&D... 
|           |             |             |             |             |
|-----------|-------------|-------------|------------ | ----------- |
| Achronix  | Brightscale | Cradle      | Mathstar    | Sandbridge  | 
| Adapteva  | Calxeda     | C-Switch    | Mobileye    | Silicon Sp. |
| Ambric    | Chameleon   | ElementCXI  | Monarch     | Stream Proc |
| Asocs     | Clearspeed  | Greenarrays | Octasic     | Stretch     |
| Aspex     | Cognivue    | Icera       | Picochip    | Tilera      |
| Axis Semi | Coherent L. | Intellasys  | Plurality   | Transputer  |
| BOPS      | CELL        | IP-flex     | PACT        | XMOS        |
| Boston C. | CPUTech     | Larrabee    | Quicksilver | Zilabs      |


---- before-after ----
background-image:  /images/before_after.jpg

### Parallel Processor Startup "Before & After"


