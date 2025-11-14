# Example: Calculate the population and sample means.
import pandas as pd
import numpy as np

np.random.seed(0)  # for reproducibility
species_counts = np.random.randint(100, 300, size=100)  # random counts between 100 and 300 for 100 different areas
areas = ['Area' + str(i) for i in range(1, 101)]
data = {'Area': areas, 'Species_Count': species_counts}
df = pd.DataFrame(data)

# Population mean
population_mean = df['Species_Count'].mean()

# Sample mean (taking the first three areas as a sample)
sample = df.head(3)
sample_mean = sample['Species_Count'].mean()

print("Population Mean:", population_mean)
print("Sample Mean:", sample_mean)

# Example: Calculating mean and variance for both population and sample.
# Population mean
population_mean = df['Species_Count'].mean()

# Sample mean
sample_mean = sample['Species_Count'].mean()

# Population variance
population_variance = df['Species_Count'].var(ddof=0)

# Sample variance
sample_variance = sample['Species_Count'].var(ddof=1)

print("Population Mean:", population_mean)
print("Sample Mean:", sample_mean)
print("Population Variance:", population_variance)
print("Sample Variance:", sample_variance)

import matplotlib.pyplot as plt

# Taking multiple samples and calculating their means
# That is, take a random sample of 15 values. Repeat this process 100 times.
sample_means = [np.mean(df['Species_Count'].sample(15)) for _ in range(100)]

# Plotting the distribution of sample means
plt.hist(sample_means, bins=10, edgecolor='black')
plt.xlabel('Sample Mean')
plt.ylabel('Frequency')
plt.title('Distribution of Sample Means')
plt.show()

import scipy.stats as stats

# Sample data: Number of a particular species in first three areas
sample_data = sample['Species_Count']  # Sample values

# Calculate mean and standard error of the mean (SEM)
mean = np.mean(sample_data)
standard_error = stats.sem(sample_data)

# Degrees of freedom
degrees_freedom = len(sample_data) - 1

# Calculate 95% confidence interval for sample mean
confidence_level = 0.95
confidence_interval = stats.t.interval(confidence_level, degrees_freedom, mean, standard_error)

print(f"95% Confidence Interval: {confidence_interval}")



