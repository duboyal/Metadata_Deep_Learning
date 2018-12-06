# Deep Learning with Metadata
## Overview:
1. [Problem](README.md#problem)
2. [Dataset](README.md#input-dataset)
3. [File Descriptions](README.md#output)



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

### LSUN/utils/LSUNDataloader.py
this is 




