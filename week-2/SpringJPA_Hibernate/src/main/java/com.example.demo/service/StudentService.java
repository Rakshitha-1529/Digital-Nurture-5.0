@Service 
public class StudentService{

    @Autowired
    StudentRepository repository;

    public List<Student> getAllStudents(){
        return repository.findAll();
    }

    public Student save(Student student){
        return repository.save(student);
    }
}