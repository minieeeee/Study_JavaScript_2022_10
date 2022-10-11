# github repository 업로드

## https://github.com 계정생성
## repository 도구 설치
* https://git-scm.com 에서 다운로드 설치

## github에 새로운 repository 생성
* github에 login 한 후 new repository 실행하여 생성

## local project upload 하기
### local repository 만들기
* local repositotry는 내 pc에 저장된 프로젝트를 github에 업로드 하기 위하여 압축하는 절차
1. 프로젝트 폴더에서 Git bash here 실행

2. local에 계정 정보 저장하기
* git config --global user.name minieeeee
* git config --global user.email oming4721@gmail.com
* pc를 교체했거나, 윈도우를 재설치 했거나, 최초로 github와 연동할 때만 실행

3. local repository 생성하기
* git init  

4. 원격(remote, origin) repository 정보 저장하기
* 새로운 repository를 생성했을 때
* git remote add origin https://github.com/minieeeee/Study_JavaScript_2022_10.git
* origin이라는 이름으로 github의 원격 repostitory 주소를 등록하는 절차

5. 프로젝트를 압축하여 local repository(.git 폴더)에 저장하기
* git add .
* git commit -m "Comment"

6. 업로드하기
* git push -u origin master

## 프로젝트 수정(변경, 추가, 내용 삭제)
* git add .
* git commit -m "수정한 내용 Comment"
* git push

## github에서 최초로 프로젝트 다운로드 받기
* github.com에 로그인하기
* repository의 주소 복사하기
* bash를 열고 
* git clone 주소 붙이기(Shift + insert)

## 다운로드 후에 내용 변경한 후 다시 push
* git add .
* git commit -m "다시 push"
* git push

## 원격 repository에서 변경된 내용 가져오기
* git pull