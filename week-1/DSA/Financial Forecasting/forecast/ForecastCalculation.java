package forecast;

public class ForecastCalculation {

    public static double calculateFutureValue(double initialValue, double growthRate,int years) {
        if (years == 0)
            return initialValue;

        return (1 + growthRate) * calculateFutureValue(initialValue, growthRate, years - 1);
    }

    public static double calculateWithMemo(double initialValue,double growthRate,int years,double[] memo) {

        if (years == 0)
            return initialValue;

        if (memo[years] != 0)
            return memo[years];

        memo[years] = (1 + growthRate) *calculateWithMemo(initialValue, growthRate,years - 1, memo);

        return memo[years];
    }
}