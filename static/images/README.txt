1980:s     Simple DSP (MAC)

1998-2005: TigerSHARC DSP (VLIW)
           100 people, $100M
           0.75 GFLOPS/W  

2005-Sept: TigerSharc design center in Israel closed
           100 people (including me layed off) 
           I was devastated!
           But it turns out that working hard is its own reward
	   (make sure you have useful skills)

2006-2007: Mixed signal group
           5 chips in 2 years
           (Me, digital, analog, layout person)
           Created a small microcontroller
           $200M/year within group
           Exposed to lots of mixed signal chips-->(example of datasheet)

2007-May:  Embedded systems conference
           Watching Jeff Bier presentation (DSP analyst)
           Walking across the street-->EPIPHANY
           Better to use many small specialized processors in a pipe.
           (GENERATION 0)

2008-Jan:  Left Analog Devices
           My boss at the time Katsu Nakamura thought that maybe I had
           a mental breakdown

2008-Mar:  First ISA done
           -spreadsheet
           -hennesy&patterson
           -scouring ADI, TI, ARM manuals
           -write verilog code --> verilator simulation
           -doug garde (Sharc architect) --> separate off chip write network 
           -mikael taveniku (Mercury) --> 64 regs, 2D
           -israel koren (Umass prof) --> no denormals, no redundancy
           -paul kettle (adi/maxim) --> 

LESSONS: Get advisors, study history, but know when to listen! 
         (some people get offended when you don't take advise)

Questions:
-what instructions to put in, what to keep out
-how many registers (16 tap filter all out of regs)
-what kind of memory system (easy)
-denormal numbers
-floating point (in or out)-->talked to folks familiar with ambric, tilera
-support for fractional?
-support for byte addresssing (yes, tigersharc)

2008-May:  First NOC done (provisional patents filed)

2008-Jun:  DMA, interrupts, etc

2008-Oct:  Layout done, borrowed tools from Synopsys (1GHz, tiny)
           Demonstrated 50 GFLOPS/W was possible.

2008-Dec:  Went to my father and said, I am ready.
           $200K (minimum needed)

2009-Mar:  Got the tools from Magma
           LVDS (IP is expensive)
           No PLL, fed in clock (no$)
           Some high speed dacs/adcs don't have plls (less jitter)

2009-Jun:  Tapeout
           110 hours of work last week
           fixing bugs until last day
           fixing DRC/LVS layers 1 week after tapeout



Constraints:
cost of development ($$)
my own limitations (analytical/complexity aversion)
the market (floating point, c-programmable)
physics (less is more)
symmetry
ease of layout
(No benchmarks, no simulator!, complete opposite!!!!!!!!!!!!!)
 

                 
           
        

             
 
             
