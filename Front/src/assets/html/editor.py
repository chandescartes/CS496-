import os
import pymongo


class Document:
    def __init__(self, language, lesson, strings):
        self.language = language
        self.lesson = lesson
        self.strings = strings
        self.name = "%s-%s" % (self.language, self.lesson)


    def __str__(self):
        return self.name


def getResList():
    return os.listdir() # 현재 디렉토리의 String resources 목록을 불러온다.


def isCorrectFile(resFileName):
    return resFileName != "editor.py" and resFileName != ".editor.py.swp"


def filterText(lines): # string array에서 \n 제거해서 return
    return list(map(lambda x: x.replace("\n", ""), lines))


def parseResources(): # 현재 폴더에서 리소스들을 파싱해 document List 형태로 return 합니다.:w
    resList = getResList()
    docList = []

    for resFileName in resList:
        if isCorrectFile(resFileName):
            resFile = open(resFileName, "r")
            lines = filterText(resFile.readlines())

            lesson = "list"

            if(resFileName == "kor-others.txt"):
                language = "kor"
            elif(resFileName == "eng-others.txt"):
                language = "eng"
            else:
                splited = resFileName.split("-")
                language = splited[0]
                lesson = splited[1].split(".")[0] # <lesson>.txt 이기 때문에 . 으로 한 번 더 분리해준다.

            strings = "".join(lines) 

            resFile.close()
            docList.append(Document(language, lesson, strings))

    return docList


def saveResources(resources): # MognoDB Client를 return
    client = pymongo.MongoClient()
    
    db = client.a2a
    col = db.resString

    col.remove({}) # 저장된 string resources를 일단 전부 지운다.

    for doc in resources:
        print(doc.name)
        col.insert_one({"name":doc.name, "language":doc.language, "lesson":doc.lesson, "strings":doc.strings})


def main():
    res = parseResources()
    saveResources(res)


main()
