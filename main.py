def greet(name):
    return f"Hello {name} from Python via WebAssembly!"

# Example of using numpy (Pyodide comes with numpy pre-installed)
def calculate_something():
    import numpy as np
    arr = np.array([1, 2, 3, 4, 5])
    return f"Array sum: {np.sum(arr)}"