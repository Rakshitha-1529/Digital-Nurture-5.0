@RestController
@RequestMapping("/students")
public class StudentController{

    @Autowired
    StudentService service;

    @GetMapping
    public List<Student> getStudents(){
        return service.getAllStudents();
    }

    @PostMapping
    public Student save(@RequestBody Student student){
        return service.save(Student);
    }
}