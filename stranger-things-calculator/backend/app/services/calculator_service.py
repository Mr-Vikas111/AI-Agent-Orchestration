class CalculatorService:
    @staticmethod
    def calculate(operation: str, a: float, b: float) -> float:
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
        else:
            raise ValueError(f"Unknown operation: {operation}")
