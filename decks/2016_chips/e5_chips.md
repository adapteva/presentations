---- moore ----
name: Cost Constrained CHIP Design

---- #title ------------------------------------------------------------------

![](/images/epiphanyIV.jpg)
## Cost Constrained CHIP Design
by Andreas Olofsson, Adapteva (9/21/16)

---- #adapteva-history ----

## Adapteva History

- 2008: Founded (Lexington, MA)
- 2011: 16-core 25 GFLOPS/W 65nm product
- 2012: 64-core 50 GFLOPS/W 28nm product
- 2012: Parallella Kickstarter chip crowd funding
- 2014: Parallella shipped to over 10K users, 200 Universities
- 2016: Tapeout of Epiphany-V: 1024-core 64-bit processor

---- #parallella ----
background-image:  /images/parallella_front_slant.png

# Parallella
---- #epiphany-5 ----

## Epiphany-V Introduction

* TSMC 16FF (CRAFT tapeout)
* 1024 64-bit RISC processors
* 64/32-bit IEEE floating point support
* 64 MB on-chip SRAM
* 1024 programmable I/O signals
* 117mm^2, 4.5B transistors

---- #chip1 -----

## E5 Layout
![](/images/e5_layout.png "align=center height=400")

---- #chip2 -----

## E5 Bumps
![](/images/e5_flipchip.png "align=center height=400")

---- #e5-io -----

## Our I/O Challenges

* Needed massive IO to support 4 TFLOPS!
* Initial plan was 128 x 10Gbit SERDES lanes
* ...but cost made monolithic integration impossible
* Fallback was 1024 1.8V CMOS pins running at @ 150MHz...

---- #opportunity -----

## Opportunity


| Rule                                | Value                                 |
|-------------------------------------|---------------------------------------|
| Chip wire pitch                     | 0.08um                                |
| 2.5D wire pitch                     | 4um                                   |
| Wirebond pitch                      | 30um                                  |
| 2.5D Bump pitch                     | 45um                                  |
| Flip-chip pitch                     | 170um                                 |
| BGA pitch (advanced)                | 400um                                 |
| Ethernet connector                  | ~10,000um                             |

---- #proposal -----

## A Strawman Chip-to-Chip Interface

* Make 50um bumps are available to all customers
* Drive parallel interfaces (clk, frame, wait, data[N-1:0])
* Reference RTL: github.com/parallella/oh
* CMOS signaling using thin oxide transistors (0.8V)
* Energy Target: 0.2pJ / bit
* Density Target: 2Tbit / mm^2

---- #opinions -----

## Standards Recommendations

* Open access
* Open license
* Free from royalty/patent issues
* At least one free physical implementation
* Keep it simple
* Open collaboration (optional)

