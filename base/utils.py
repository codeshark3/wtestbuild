import cv2
import numpy as np
from PIL import Image


def get_oncho_images(onc_img):
 
        # img=cv2.imread(pil_img)
        img = cv2.cvtColor(onc_img, cv2.COLOR_RGB2HSV)

        img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

        img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

        contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        contour_value = len(contours)
        print (contour_value)
        return contour_value
def get_schisto_images(sch_img):
 
        # img=cv2.imread(pil_img)
        img = cv2.cvtColor(sch_img, cv2.COLOR_RGB2HSV)

        img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

        img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

        contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        contour_value = len(contours)
        print (contour_value)
        return contour_value
def get_lf_images(lf_img):
 
        # img=cv2.imread(pil_img)
        img = cv2.cvtColor(lf_img, cv2.COLOR_RGB2HSV)

        img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

        img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

        contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        contour_value = len(contours)
        print (contour_value)
        return contour_value


def get_helminths_images(hel_img):
 
        # img=cv2.imread(pil_img)
        img = cv2.cvtColor(hel_img, cv2.COLOR_RGB2HSV)

        img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

        img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

        contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        contour_value = len(contours)
        print (contour_value)
        return contour_value

    # def getImages(onchoImage, oncho):
        # pil_img = Image.open(onchoImage)
        # img_name = onchoImage.info["filename"]

        # # img = np.array(pil_img)
        # img = cv2.imread(img_name)
        # img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

        # img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

        # kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

        # img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

        # contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        # if len(contours) < 2 :
        #     oncho ="NEGATIVE"
        # elif len(contours)== 2:
        #     oncho = "POSITIVE"
        # elif len(contours) > 2:
        #     oncho = "NOT_VALID"
        # print(img_name)
        # print('number of lines in test is ', len(contours))
        # # print('number of lines in test is ', len(contours)/2 )

        # if len(contours) == 0:
        #     oncho = "Not Valid 0"

