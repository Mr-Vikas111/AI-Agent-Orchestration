import math


class CalculatorService:
    @staticmethod
    def calculate(operation: str, a: float, b: float = 0) -> float:
        if operation == "add":
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "multiply":
            return a * b
        elif operation == "divide":
            if b == 0:
                raise ValueError("Division by zero is not allowed in the Upside Down")
            return a / b
        elif operation == "modulo":
            if b == 0:
                raise ValueError("Division by zero is not allowed in the Upside Down")
            return a % b
        elif operation == "power":
            return a ** b
        elif operation == "sin":
            return math.sin(math.radians(a))
        elif operation == "cos":
            return math.cos(math.radians(a))
        elif operation == "tan":
            return math.tan(math.radians(a))
        elif operation == "sqrt":
            if a < 0:
                raise ValueError("Cannot take square root of a negative number in the Upside Down")
            return math.sqrt(a)
        elif operation == "log":
            if a <= 0:
                raise ValueError("Logarithm undefined for non-positive numbers in the Upside Down")
            return math.log(a)
        elif operation == "log10":
            if a <= 0:
                raise ValueError("Logarithm undefined for non-positive numbers in the Upside Down")
            return math.log10(a)
        else:
            raise ValueError(f"Unknown operation: {operation}")
