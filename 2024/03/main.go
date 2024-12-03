package main

import (
    "fmt"
    "os"
    "regexp"
    "strconv"
)

// Variable(s)
var inputFile = "./input1.txt"

func sumMultiplications(memory string) int {
    mulRegex := regexp.MustCompile(`mul\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)`)
    matches := mulRegex.FindAllStringSubmatch(memory, -1)
    
    totalSum := 0
    
    for _, match := range matches {
        num1, err1 := strconv.Atoi(match[1])
        num2, err2 := strconv.Atoi(match[2])
        if err1 == nil && err2 == nil {
            totalSum += num1 * num2
        }
    }
    
    return totalSum
}

func sumMultiplicationsWithConditions(memory string) int {
    mulRegex := regexp.MustCompile(`mul\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)`)
    doRegex := regexp.MustCompile(`do\(\)`)
    dontRegex := regexp.MustCompile(`don't\(\)`)

    totalSum := 0
    enabled := true  // Initially, mul instructions are enabled.

    // Find the indices of all mul, do, and don't instructions
    mulMatches := mulRegex.FindAllStringSubmatchIndex(memory, -1)
    doMatches := doRegex.FindAllStringSubmatchIndex(memory, -1)
    dontMatches := dontRegex.FindAllStringSubmatchIndex(memory, -1)

    // Iterate through all positions in the memory string to determine which mul instructions are enabled
    index := 0
    for i := 0; i < len(memory); i++ {
        // Update the enabled state based on the most recent do() or don't()
        for _, doMatch := range doMatches {
            if doMatch[0] == i {
                enabled = true
            }
        }
        for _, dontMatch := range dontMatches {
            if dontMatch[0] == i {
                enabled = false
            }
        }

        // Process mul instructions
        if index < len(mulMatches) && mulMatches[index][0] == i {
            match := mulMatches[index]
            num1, err1 := strconv.Atoi(memory[match[2]:match[3]])
            num2, err2 := strconv.Atoi(memory[match[4]:match[5]])
            if err1 == nil && err2 == nil && enabled {
                totalSum += num1 * num2
            }
            index++
        }
    }

    return totalSum
}

func main() {
    content, err := os.ReadFile(inputFile)
    if err != nil {
        fmt.Println("Error reading file:", err)
        return
    }
    // Convert to string
    memory := string(content)
    resultPart1 := sumMultiplications(memory)
    resultPart2 := sumMultiplicationsWithConditions(memory)
    fmt.Printf("Part 1, Sum of multiplications: %d\n", resultPart1)
    fmt.Printf("Part 2, Sum of multiplications with conditions: %d\n", resultPart2)
}
