# Deep Learning with Metadata
## Overview:
1. [Problem](README.md#problem)
2. [Dataset](README.md#Dataset)
3. [File Descriptions](README.md#File Descriptions)
4. [LSUN/](README.md#LSUN)



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
## LSUN/
### LSUN/utils/LSUNDataloader.py
This file defines the dataloader class, has class variable of a list of csvs saved, then has the get item attribute for a single image at once based on index, where the batch size is a variable defined in the code found in Baseline_vs_meta.ipynb, in which case the data loader would execute "get_item" that determined number of times.

### LSUN/Baseline_vs_meta.ipynb
This file is where the main network training happens and also communicates with the data loader. 

### LSUN/ConvertToTar.ipynb 
converts entire directory to a tar file to be easily pushed to github
### LSUN/Dummy.ipynb
performs the resampling with designated ratios of desired classes and outputs a new upsampled train.csv file
### LSUN/PreprocessingLSUN.ipynb
This file maps the lassoed and deselceted images to its url_links and classes, because the metadata of "deselect" and "lasso" are of course, attatched to specific images from website, that we need to keep of in order to know which ones to upsample in our training data set.  
### LSUN/ExperimentLog.csv
This file outputs from Baseline_vs_metadata.ipynb with experiment details
### LSUN/QueryDatastore.py
This file is the script with the python wrapper used to querey the Datastore
### LSUN/Results_LSUN.csv
This file outputs from Baseline_vs_metadata.ipynb with results
### ActivationVisualization.ipynb
This is a nice visulaization of performing t-sne (similar to Principal component analysis) to see how well the model is able to seperate out the different classes. This is also very integral in showing us how likely the user is to pick up other 'classes' when trying to only select one class. in this case we encourage the user to select a small amount of classes at once when they are "lassoing" images
## Plugin/


