﻿
### Git鼓励大量使用分支：

##  **查看分支：**
>git branch

##  **创建分支：**
>git branch <name>

## **切换分支：**
>git checkout <name>或者**git switch <name>**

## **创建+并-切换分支：**
>git checkout -b <name>或者**git switch -c <name>**

## **合并某分支到当前分支：**
>**git merge <name>**
## 合并分支 `--no-ff`
>git merge **`--no-ff`** -m  "merge with no-ff"  dev
    
    * 加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。**

* **删除分支：**
>**git branch -d <name>**

##  **BUG分支**
* `git stash` **1.暂存工件区**
> 现在，用 **git status** 查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。
* git checkout master **2.切换至 要修改的BUG分支**
* git checkout -b issue-101 **3.创建并切换至 ` issue-101` 新分支上**
* git add .    **4.修改 ‘isuse101’ 后提交**
* git commit -m "fix bug 101"   **5修改`isuse101`后提交**
* git checkout master   **6.切换回BUG分支** 
* git merge --no-ff -m "merged bug fix 101" issue-101 **7.将处理完的BUG *101*合并回来**
 * git stash list  **8.查看暂存区**
 * git stash apply **9.1 恢复工作区-不删除**
 * git stash pop **9.2 **恢复工作区-并删除**

 * git stash list **可以多次 `stash`查看**
 * **git stash apply stash@{0}** **恢复指定的暂存区stash**
 
> 修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；
当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场；在master分支上修复的bug，想要合并到当前dev分支，可以用`git cherry-pick <commit>`命令，把bug提交的修改“复制”到当前分支，避免重复劳动。


## 小结
```
查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>或者git switch <name>

创建+切换分支：git checkout -b <name>或者git switch -c <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>
```

