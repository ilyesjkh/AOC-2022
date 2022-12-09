package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func opendata(filename string) [][]int {
	input, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(input)
	treedata := [][]int{}
	for scanner.Scan() {
		line := scanner.Text()
		linelist := strings.Split(line, "")
		linelistint := []int{}
		for i := 0; i < len(linelist); i++ {
			integ, err := strconv.Atoi(linelist[i])
			if err != nil {
				panic(err)
			}
			linelistint = append(linelistint, integ)
		}
		treedata = append(treedata, linelistint)
	}
	return treedata
}

func isitvisible(treecoor [2]int, treedata [][]int) bool {
	if updownvisibility(treecoor, treedata) {
		return true
	}
	if rightleftvisibility(treecoor, treedata) {
		return true
	}
	return false
}

func updownvisibility(treecoor [2]int, treedata [][]int) bool {
	x := treecoor[0]
	y := treecoor[1]
	verif := []bool{true, true}
	i := 1
	for i <= x && verif[0] {
		if treedata[x-i][y] >= treedata[x][y] {
			verif[0] = false
		}
		i++
	}
	i = 1
	for i < (len(treedata)-x) && verif[1] {
		if treedata[x+i][y] >= treedata[x][y] {
			verif[1] = false
		}
		i++
	}
	if !verif[0] && !verif[1] {
		return false
	} else {
		return true
	}

}

func updownvisibilityv2(treecoor [2]int, treedata [][]int) int {
	x := treecoor[0]
	y := treecoor[1]
	verif := []bool{true, true}
	counter := [2]int{0, 0}
	i := 1
	for i <= x && verif[0] {
		if treedata[x-i][y] >= treedata[x][y] {
			verif[0] = false
		}
		i++
	}
	counter[0] = i - 1
	i = 1
	for i < (len(treedata)-x) && verif[1] {
		if treedata[x+i][y] >= treedata[x][y] {
			verif[1] = false
		}
		i++
	}
	counter[1] = i - 1

	return counter[0] * counter[1]

}

func rightleftvisibility(treecoor [2]int, treedata [][]int) bool {
	x := treecoor[0]
	y := treecoor[1]
	verif := []bool{true, true}
	i := 1
	for i <= y && verif[0] {
		if treedata[x][y-i] >= treedata[x][y] {
			verif[0] = false
		}
		i++
	}
	i = 1
	for i < (len(treedata)-y) && verif[1] {
		if treedata[x][y+i] >= treedata[x][y] {
			verif[1] = false
		}
		i++
	}
	if !verif[0] && !verif[1] {
		return false
	} else {
		return true
	}

}

func rightleftvisibilityv2(treecoor [2]int, treedata [][]int) int {
	x := treecoor[0]
	y := treecoor[1]
	counter := [2]int{0, 0}
	verif := []bool{true, true}
	i := 1
	for i <= y && verif[0] {
		if treedata[x][y-i] >= treedata[x][y] {
			verif[0] = false
		}
		i++
	}
	counter[0] = i - 1
	i = 1
	for i < (len(treedata)-y) && verif[1] {
		if treedata[x][y+i] >= treedata[x][y] {
			verif[1] = false
		}
		i++
	}
	counter[1] = i - 1
	return counter[0] * counter[1]

}

func partOne(filename string) int {
	treefield := opendata(filename)
	result := 2 * (len(treefield) + len(treefield[0]) - 2)
	for i := 1; i < len(treefield)-1; i++ {
		for j := 1; j < len(treefield[0])-1; j++ {
			if isitvisible([2]int{i, j}, treefield) {
				result += 1
			}
		}
	}
	return result
}

func partTwo(filename string) int {
	treefield := opendata(filename)
	result := 0
	for i := 0; i < len(treefield); i++ {
		for j := 0; j < len(treefield[0]); j++ {
			if rightleftvisibilityv2([2]int{i, j}, treefield)*
				updownvisibilityv2([2]int{i, j}, treefield) > result {
				result = rightleftvisibilityv2([2]int{i, j}, treefield) *
					updownvisibilityv2([2]int{i, j}, treefield)
			}
		}
	}
	return result
}

func main() {
	fmt.Printf("If we consider the complete input: \n")
	fmt.Printf("The answer for the first part is: %d \n", partOne("day8_input.txt"))
	fmt.Printf("The answer for the second part is: %d \n", partTwo("day8_input.txt"))
}
