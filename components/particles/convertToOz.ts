const convertToOz = (number: number, unit: string) => {
                  
    switch (unit) {
        case "oz":
            return number
        case "cup":
            return number * 8
        case "tsp":
            return number / 6
        case "tblsp":
            return number / 2
        case "cl":
            return (number / 2.957)
        default:
            return number
        
  }
}

export default convertToOz