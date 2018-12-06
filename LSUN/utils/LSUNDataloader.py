import os
import torch
from torch.utils.data import DataLoader, Dataset
from torchvision import transforms, utils
import numpy as np
from PIL import Image
import pandas as pd
import torchvision

class LSUNDataset(Dataset):
    def __init__(self,image_dir,csv_file,transform = None):
        
        '''Opens the csv that contains file paths for all classes
        Arguments:
            csv_file {string} -- Path to csv file with class labels
            image_dir {string} -- Directory containing the csvs
            classes {string} -- List/Array of class names in dataset
        Keyword Arguments:
            transform {callable} -- Optional transform to apply to data
        '''
        self.info = pd.read_csv(os.path.join(image_dir,(str(csv_file) + ".csv")))
        self.transform = transform
        
    def __getitem__(self,index):
        image = Image.open(self.info['path'][index])
        image = image.convert('RGB')
        if self.transform:
            image = self.transform(image)
        label = self.info['encoded_label'][index]
        return image, label
    
    def __len__(self):
        return len(self.info)