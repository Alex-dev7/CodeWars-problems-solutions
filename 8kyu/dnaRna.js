
// create a function which returns an RNA sequence from the given DNA sequence

function DNAtoRNA(dna) {
    // let rna = dna
    // for(let i in rna) rna = rna.replace("T", "U")
    // return rna 
    // or 

    return dna.replaceAll('T','U')
    
  }

console.log(DNAtoRNA("TTAA"))

