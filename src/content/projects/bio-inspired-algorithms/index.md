---
title: "Bio-Inspired Algorithms"
description: "Game of Life optimization using Genetic Algorithms and Ant Colony Optimization."
date: "Feb 2026"
demoURL: ""
repoURL: "https://github.com/GuillermoEJ/Conway-s-Game-Of-Life-bio-inspired-algorithm-optimizations"
---

# Game of Life - Optimization with Bio-Inspired Algorithms

This project implements and compares two bio-inspired optimization algorithms to find optimal initial configurations for **Conway's Game of Life** that exhibit interesting evolutionary behavior.

## Optimization Algorithms

### Genetic Algorithm (GA)
Population-based search using selection, crossover, and mutation operators to evolve better solutions over generations. This approach mimics natural evolution to discover Game of Life patterns with extended lifespans.

### Ant Colony Optimization (ACO)
Metaheuristic inspired by ant foraging behavior, using pheromone trails to guide the search toward promising regions of the solution space. This algorithm leverages collective intelligence to optimize configurations.

## Key Features

- **Interactive Game of Life**: Manual or random grid initialization with real-time visualization
- **Dual Algorithm Implementation**: Compare GA and ACO performance on the same problem
- **Statistical Analysis**: Comprehensive comparison including Friedman and Shaffer tests
- **Configurable Parameters**: Adjust population size, generations, mutation rates, and pheromone parameters
- **Results Visualization**: Automatic generation of fitness evolution graphs and comparative analysis

## Tech Stack

| Component | Technology |
| :--- | :--- |
| **Language** | Python 3.7+ |
| **Algorithms** | inspyred |
| **Visualization** | Matplotlib |
| **Scientific Computing** | NumPy, SciPy |
| **Graph Analysis** | NetworkX |

## Core Modules

- **src/gameoflife.py**: Interactive Game of Life simulator
- **src/GA.py**: Genetic Algorithm implementation
- **src/ACO.py**: Ant Colony Optimization implementation
- **analysis/analisis.py**: Statistical analysis and visualization
- **tests/tests.py**: Performance comparison tests


## Results

The project generates and saves:
- Optimal initial configurations as `.npy` files
- Fitness evolution history per execution
- Best individuals per generation
- Comparative statistical analysis with visualization

---
