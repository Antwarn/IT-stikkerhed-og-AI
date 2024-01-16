import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import matplotlib.pyplot as plt

# Sætter seed for at få reproducerbare resultater
np.random.seed(0)

# Genererer tilfældige data punkter
x = np.random.rand(100, 1)
y = 2 * x + 1 + 0.1 * np.random.rand(100, 1)

# Konverterer NumPy-arrays til PyTorch-tensorer
x_tensor = torch.tensor(x, dtype=torch.float32)
y_tensor = torch.tensor(y, dtype=torch.float32)

# Definerer en simpel lineær regression model
class LinearRegression(nn.Module):
    def __init__(self):
        super(LinearRegression, self).__init__()
        self.linear = nn.Linear(1, 1)

    def forward(self, x):
        return self.linear(x)

# Instantierer modellen
model = LinearRegression()

# Definerer mean squared error (MSE) som tabelsfunktion
criterion = nn.MSELoss()

# Vælger stochastic gradient descent (SGD) som optimizer
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Antal træningsiterationer
num_epochs = 1000

# Træningsløkke
for epoch in range(num_epochs):
    # Fremadpropagation: Beregner output ved at sende input gennem modellen
    outputs = model(x_tensor)

    # Beregner tabet mellem forudsagte og faktiske værdier
    loss = criterion(outputs, y_tensor)

    # Bagudpropagation: Beregner gradienten af tabet med hensyn til modelparametrene
    optimizer.zero_grad()
    loss.backward()

    # Opdaterer modelparametrene baseret på gradienten
    optimizer.step()

    # Udskriver tabet hver 100. iteration
    if (epoch + 1) % 100 == 0:
        print(f'Epoke [{epoch+1}/{num_epochs}], Tab: {loss.item():.4f}')

# Evaluerer den trænede model på inputdata og plotter resultatet
predicted = model(x_tensor).detach().numpy()
plt.scatter(x, y, label='Original data')
plt.plot(x, predicted, label="Fit linje", color="red")
plt.legend()
plt.show()
