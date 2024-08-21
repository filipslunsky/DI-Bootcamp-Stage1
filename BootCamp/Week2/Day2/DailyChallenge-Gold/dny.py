import random

class Gene:
    def __init__(self):
        self.value = random.randint(0,1)

class Chromosome:
    def __init__(self):
        self.genes = []
        for i in range(10):
            gene = Gene()
            self.genes.append(gene)
    
    def mutate(self):
        for i in range(5):
            number = random.randint(0, 9)
            if self.genes[number].value == 0:
                self.genes[number].value = 1

class DNA:
    def __init__(self):
        self.chromosomes = []
        for i in range(10):
            chromosome = Chromosome()
            self.chromosomes.append(chromosome)


dna = DNA()

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment
    
    def mutate(self):
        for chromosome in self.dna.chromosomes:
            if random.randint(1, 100) <= self.environment:
                chromosome.mutate()
        return self.dna

organism = Organism(dna, 12)
organism_dna = organism.dna

def analyze_dna(organism_dna):
    organism_dna_analysed = []
    for chromosome in organism_dna.chromosomes:
        genes = []
        for gene in chromosome.genes:
            genes.append(gene.value)
        organism_dna_analysed.append(genes)
    return organism_dna_analysed

def count_zero_dna(organism_dna_analysed):
    total_count = 0
    for chromosome_values in organism_dna_analysed:
        count = 0
        for i in range(10):
            if chromosome_values[i] == 0:
                count += 1
        total_count += count
    return total_count

dna_analyzed = analyze_dna(organism_dna)

mutation_counter = 0
while count_zero_dna(dna_analyzed) > 0:
    organism.mutate()
    mutation_counter += 1
    dna_analyzed = analyze_dna(organism_dna)

print(mutation_counter)

