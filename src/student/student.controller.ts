import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common';
import {StudentService} from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService : StudentService) {}
    // Get API

    @Get()
    getAllStudents() {
        return this.studentService.getStudents();
    }

    @Get(':id')
    getSpecificStudent(@Param()i : any) { // getSpecificStudent(@Param(id)) {
        return this.studentService.getSpecificStudent(i.id); // return this.studentService.getSpecificStudent(id);
    }
    // Post API
    @Post()
    createStudent(@Body()student) {
        return this.studentService.createStudent(student);
    }

    @Delete(':id')
    deleteStudent(@Param()id) {
        return this.studentService.deleteStudent(id);
    }

    @Patch(':id')
    updateStudent(@Param('id')id, @Body()student) {
        return this.studentService.updateStudent(id, student);
    }
}
