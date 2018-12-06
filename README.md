# Deep Learning with Metadata
## Overview:
1. [Problem](README.md#problem)
2. [Input Dataset](README.md#input-dataset)
3. [General structure](README.md#output)
4. [Comments on time complexity](README.md#output)
5. [Output](README.md#output)


## Problem:

When presented images on an interactive website, the user is asked to lasso-select images of a certain class of their choice, and then deselect images that do not belong to that class. We want to flag these deselected images as considered to be on the "decision boundary".  We want to see if signal from user metadata (these clicks and lasso selects of specific images) may be used to be fed into the model and improve the performance of the model. The first order of action is that we would upsample the de-selected images.

## Dataset:
The Data set is a subset of LSUN scene classifier. It is a data set of scenery in the form of interior rooms of a building or home. The class names we used in this project were 'bedroom, bridge','church','class','conference','dining','kitchen','living','restaurant', and'tower'.

## General Structure:
The main program code would execute under the following file Baseline_vs_meta.ipynb

The directory structure for your repo should look like this:
```
      ├── LSUN
      │     └──.ipynb_checkpoints
      │     └──utils
      │     │   └──LSUNDataloader.py
      │     └──Baseline_vs_meta.ipynb
      │     └──ConvertToTar.ipynb
      │     └──Dummy.ipynb
      │     └──ExperimentLog.csv
      │     └──LSUNGetTrainValFiles.ipynb
      │     └──LSUNResultsVisualization.ipynb
      │     └──PreprocessingLSUN.ipynb
      │     └──QueryDatastore.py
      │     └──Results_LSUN.csv
      ├── Plugin 
      │     └──content.js
      │     └──jquery-3.3.1.min.js	
      │     └──manifest.json
      │     └──popup.html
      │     └──popup.js
      │     └──script_deselect.php
      │     └──script_lasso.php
      ├── Plugin2
      │     └──content.js
      │     └──jquery-3.3.1.min.js	
      │     └──manifest.json
      │     └──popup.html
      │     └──popup.js
      │     └──script_deselect.php
      │     └──script_lasso.php
      ├── ActivationVisualization.ipynb
      ├── README.md 
      
```
      

# File Descriptions: 
## Input Datasets:




Input is to be saved in our top level input directory as h1b_input.csv. If you download any of the raw data, save the file as such and place it in the input directory, then update the run.sh file to have ./input/h1b_input.csv as first argument.

Raw data could be found [here](https://www.foreignlaborcert.doleta.gov/performancedata.cfm) under the __Disclosure Data__ tab (i.e., files listed in the __Disclosure File__ column with ".xlsx" extension). 

There are Excel files converted from this into a semicolon separated (";") format and placed them into this Google drive [folder](https://drive.google.com/drive/folders/1Nti6ClUfibsXSQw5PUIWfVGSIrpuwyxf?usp=sharing). These were used for testing.

## Comments on time complexity:
It is understood that perhaps a stack data structure could be implemented to improve time complexity in som of the areas of the code (for example around lines 84 or 95 where there are double for loops) this could possibly improve time complexity to O(n^2) to O(n) if such a data structure could be implemented. I would like to revisit this project and improve it in this manner. Improving the time efficiency is always best practice.

## Output:

The program creates 2 output files:
* `top_10_occupations.txt`: Top 10 occupations for certified visa applications
* `top_10_states.txt`: Top 10 states for certified visa applications

Each line holds one record and each field on each line is separated by a semicolon (;).

Each line of the `top_10_occupations.txt` file contains these fields in this order:
1. __`TOP_OCCUPATIONS`__: Use the occupation name associated with an application's Standard Occupational Classification (SOC) code
2. __`NUMBER_CERTIFIED_APPLICATIONS`__: Number of applications that have been certified for that occupation. An application is considered certified if it has a case status of `Certified`
3. __`PERCENTAGE`__: % of applications that have been certified for that occupation compared to total number of certified applications regardless of occupation. 

The records in the file must be sorted by __`NUMBER_CERTIFIED_APPLICATIONS`__, and in case of a tie, alphabetically by __`TOP_OCCUPATIONS`__.

Each line of the `top_10_states.txt` file contains these fields in this order:
1. __`TOP_STATES`__: State where the work will take place
2. __`NUMBER_CERTIFIED_APPLICATIONS`__: Number of applications that have been certified for work in that state. An application is considered certified if it has a case status of `Certified`
3. __`PERCENTAGE`__: % of applications that have been certified in that state compared to total number of certified applications regardless of state.

The records in this file are sorted by __`NUMBER_CERTIFIED_APPLICATIONS`__ field, and in case of a tie, alphabetically by __`TOP_STATES`__. 



