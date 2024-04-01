import { Component } from "@angular/core";

@Component({
    selector: 'students',
    standalone: true,
    imports: [],
    template: '<h2>{{getTitle()}}</h2>'
})
export class StudentsComponent {
    title = "My List of Students";

    getTitle() {
        return this.title
    }

}