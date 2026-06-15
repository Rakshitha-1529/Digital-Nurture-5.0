public class Logger{
    private static Logger loggerInstance = null;
    private Logger() {
        System.out.println("Logger Constructor of Singleton is called" );
    }

    public static Logger getInstance(){
        if(loggerInstance == null)
        {
            loggerInstance = new Logger();
        }
        return loggerInstance;
    }
}