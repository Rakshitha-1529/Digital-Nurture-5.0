import forecast.ForecastCalculation;

public class Test {
    public static void main(String[] args) {

        double initialValue = 20000;
        double growthRate = 0.04;
        int years = 7;

        double futureValue =
            ForecastCalculation.calculateFutureValue(
                initialValue, growthRate, years);

        System.out.printf(
            "Predicted value after %d years (Recursive): ₹%.2f%n",
            years, futureValue);

        double[] memo = new double[years + 1];

        double memoizedValue =
            ForecastCalculation.calculateWithMemo(
                initialValue, growthRate, years, memo);

        System.out.printf(
            "Predicted value after %d years (Memoized): ₹%.2f%n",
            years, memoizedValue);
    }
}