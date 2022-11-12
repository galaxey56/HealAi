from rest_framework.decorators import api_view
from rest_framework.response import Response
import pickle
import pandas as pd
# import os
 
filename = './server/log4m.sav'
loaded_model = pickle.load(open(filename, 'rb'))




@api_view(['GET', 'POST'])
def score(req):
    if req.method=='POST':
        print(req.data)
    data = {
    'const' : [1],
    'insurance_Meedicaid' : [req.data["insurance_Meedicaid"]],
    'insurance_Medicare' : [req.data["insurance_Medicare"]],
    'marital_status_MARRIED' : [req.data["marital_status_MARRIED"]],
    'marital_status_SINGLE' : [req.data["marital_status_SINGLE"]],
    'marital_status_WIDOWED' : [req.data["marital_status_WIDOWED"]],
    'religion_CATHOLIC' : [req.data["religion_CATHOLIC"]],
    'religion_NOT SPECIFIED' : [req.data["religion_NOT_SPECIFIED"]],
    'religion_UNOBTAINABLE' : [req.data["religion_UNOBTAINABLE"]],
    'religion_PROTESTANT QUAKER' : [req.data["religion_PROTESTANT_QUAKER"]],
    'education_Graduate degree' : [req.data["education_Graduate_degree"]],
    'education_Less than high school' : [req.data["education_Less_than_high_school"]],
    'education_Some college' : [req.data["education_Some_college"]],
    'education_Some graduate school' : [req.data["education_Some_graduate_school"]],
    'employment_status_Self-employed/No data' : [req.data["employment_status"]],
    'food_stamps_Yes' : [req.data["food_stamps_Yes"]],
    'ethnicity_MINORITY	' : [req.data["ethnicity_MINORITY"]],
    'ethnicity_WHITE' : [req.data["ethnicity_WHITE"]],
    }

    df = pd.DataFrame(data)
        
    # print("File location using os.getcwd():", os.getcwd())
    # print(loaded_model.predict(df)[0])
    # print(df)
    return Response({"score":loaded_model.predict(df)[0]*100})