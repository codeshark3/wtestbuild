import cv2
import glob
import itertools

# def getFilenames(exts):
#     fnames = [glob.glob(ext) for ext in exts]
#     fnames = list(itertools.chain.from_iterable(fnames))
#     return fnames

# exts =["*.png"]

# res = getFilenames(exts)  schistoImage,
    # lfImage ,
    # helminthsImage 
# print(res)
def getImages(onchoImage):
    img = cv2.imread(onchoImage)

    img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    img = cv2.inRange(img, (150, 60, 100), (255, 255, 255))

    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (11,11))

    img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, 6)

    contours, hier = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    if len(contours) < 2 :
        print('The patient is not infected')
    elif len(contours)== 2:
        print('The patient is infected')
    elif len(contours) > 2:
        print('the test is not valid')
    print('number of lines in test is ', len(contours))
    # print('number of lines in test is ', len(contours)/2 )

    if len(contours) == 0:
        print('0 value is'+ onchoImage)