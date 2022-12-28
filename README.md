# AOC-2022
Follow my journey to the 2022 Advent Of Code ! 

# Advent Of Code 2022

## [Day 01: Calorie Counting](https://adventofcode.com/2022/day/1)

This first day was pretty easy. It was very useful to get back to using Javascript (this is what took a little bit of time: remembering how to code in js.).
I used reduce, map and sort.


## [Day 02: Rock Paper Scissors](https://adventofcode.com/2022/day/2)

This day was pretty easy too. I did a very basic code that considered every possible situation with if conditions. 


## [Day 03: Rucksack Reorganization](https://adventofcode.com/2022/day/3)

Very easy day once again. Nothing special to say. I could have done a better job by not repeating code for the two different parts but my goal was to simply have something that works and it does.


## [Day 04: Camp Cleanup](https://adventofcode.com/2022/day/4)

I took a bad (stupid) decision on the first part on the way I stock information. I could just have done arrays and compared their values. There are better ways to solve the problem than just stocking all the number between the starting number and the ending one and looking for repetition like I did. It is not optimal but it works.

## [Day 05: ](https://adventofcode.com/2022/day/5)

I really enjoyed this problem. It was pretty easy, I just used an array to stock the values and used push to add values to the stack and pop to pop the last element. For the second part, I used an intermediary array to stock the information so that it is put in the desired order in the actual stack.

## [Day 06: ](https://adventofcode.com/2022/day/6)

Nothing special to say. Allowed me to used the match method. The second part is done by just changing 4 by 14.

## [Day 07: ](https://adventofcode.com/2022/day/7)

Really struggled with this day. I think it is because I took a bad decision from the start. Took me a lot of time and I understood it wouldn't work. It worked on the test input data tho. The reason why it did not work is because I did not consider at first that two files could have the same name. I will try to make it work in the future.

## [Day 08: ](https://adventofcode.com/2022/day/8)

First day done in GO. It was really hard to change programming language like that. I basically relearned how to do the basic things I knew how to do in JS. It took me a lot more time that if I would have done it in JS. I'll do maybe 1 or 2 more days in GO and switch back to JS for comfort and not to lose too much time each days. (learning JS already takes me a lot o time).
The problem was pretty easy, nothing much to say.

## [Day 09: ](https://adventofcode.com/2022/day/9)

This is going to be my last day trying GO in Advent of Code. Indeed, it took me a lot of time to only do the first part and I did not have time to make my second part work. The first part was not that hard: I simply had to understand how the tail followed the head and defined its movement depending on the move of the head. The second part is the same thing but considering each node as the head of the following head, but I could not make it work properly and lost a lot of time. I will try to make it work completely in the future.

## [Day 10: ](https://adventofcode.com/2022/day/10)

Back to JS! Pretty fun problem today. Not really hard but took a bit of time to debug and to really understand how it was supposed to work.

## [Day 11: ](https://adventofcode.com/2022/day/11)

This problem was very fun and useful (especially the second part). Indeed, the first part was quite easy: it was just parsing and following the steps. For the second part, I first used BigInts but it was not enough. I then knew it was all about not having big number at lot. Dividing by the product of each test dividers seemed to be the solution.

## [Day 12: ](https://adventofcode.com/2022/day/12)


## [Day 13: ](https://adventofcode.com/2022/day/13)


## [Day 14: ](https://adventofcode.com/2022/day/14)



## [Day 15: ](https://adventofcode.com/2022/day/15)



## [Day 16: ](https://adventofcode.com/2022/day/16)



## [Day 17: ](https://adventofcode.com/2022/day/17)

I did not have time to do much AOC this week because of a lot of school work. Nonetheless, I took the time today. This day took me quite a lot of time to be honest. I always had a bug or my program always did not work for some reason(an offset to correct or other little annoying issues). In the end it worked. For the second part, the value is way too big. I did not figure out how to not stock too much information. I guess it is all about finding patterns but I could not guess the solution.

## [Day 18: ](https://adventofcode.com/2022/day/18)



## [Day 19: ](https://adventofcode.com/2022/day/19)



## [Day 20: ](https://adventofcode.com/2022/day/20)



## [Day 21: ](https://adventofcode.com/2022/day/21)

I really enjoyed this problem. Not much difficulty for the first part. Still trying to figure out how to make my part2 work. I'm chose not to make a tree data structure. For the second part, I am trying extract the equation and write it as a String and then solve it thanks to nerdamer, a javascript tool that can solve equations. I'll update and push part two when I succeed/find time to.


## [Day 22: ](https://adventofcode.com/2022/day/22)


## [Day 23: ](https://adventofcode.com/2022/day/23)



## [Day 24: ](https://adventofcode.com/2022/day/24)

This problem had me learn a lot of things. I first tried to implement Dijsktra's algorithm to find the shortest path but I really struggled to make it work, it took me a lot of time for no result (but I discovered this interesting algorithm for shortest path finding) so I looked for another algorithm that works on unweighted graphs. I chose to implement a BFS algorithm. I struggled to make it work and it took me a long time not because it was a very difficult algorithm to implement but because of a lot of small mistakes and bugs I had to find (my code worked for the test input but not the real input...). I eventually figured out the issue (I was not considering not to move as a possible move if other moves were possible. It was considered only if it was not possible to move.) and the second part was quite easy after that. 
I could really optimize my program. It is quite slow and I could make it way better but now that I solved the problem I prefere to solve another one.


## [Day 25: ](https://adventofcode.com/2022/day/25)


