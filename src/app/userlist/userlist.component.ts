import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // Import for pagination functionality

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
})
export class UserListComponent implements OnInit {
  userslist: any = [];
  filteredItems: any = [];
  searchName: string = '';
  searchEmail: string = '';
  searchCity: string = '';
  p: number = 1; // Current page for pagination
  masterSelected: boolean = false; // Tracks the state of the master checkbox
  allSelectedItems: any[] = []; // Array to store selected items

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userslist = [
      
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', contact: '1234567890', city: 'New York', isActive: true, selected: false },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', contact: '2345678901', city: 'Los Angeles', isActive: false, selected: false },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', contact: '3456789012', city: 'Chicago', isActive: true, selected: false },
      { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', contact: '4567890123', city: 'Houston', isActive: true, selected: false },
      { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', contact: '5678901234', city: 'Phoenix', isActive: false, selected: false },
      { id: 6, name: 'Emily Wilson', email: 'emily.wilson@example.com', contact: '6789012345', city: 'San Antonio', isActive: true },
      { id: 7, name: 'Frank Moore', email: 'frank.moore@example.com', contact: '7890123456', city: 'San Diego', isActive: false },
      { id: 8, name: 'Grace Taylor', email: 'grace.taylor@example.com', contact: '8901234567', city: 'Dallas', isActive: true },
      { id: 9, name: 'Hannah White', email: 'hannah.white@example.com', contact: '9012345678', city: 'San Jose', isActive: true },
      // { id: 10, name: 'Isaac Clark', email: 'isaac.clark@example.com', contact: '1123456789', city: 'Austin', isActive: false },
      { id: 11, name: 'Jack Lee', email: 'jack.lee@example.com', contact: '2234567890', city: 'Jacksonville', isActive: true },
      { id: 12, name: 'Karen Martin', email: 'karen.martin@example.com', contact: '3345678901', city: 'Fort Worth', isActive: true },
      { id: 13, name: 'Liam Lewis', email: 'liam.lewis@example.com', contact: '4456789012', city: 'Columbus', isActive: false },
      { id: 14, name: 'Mia Young', email: 'mia.young@example.com', contact: '5567890123', city: 'San Francisco', isActive: true },
      { id: 15, name: 'Nathan Harris', email: 'nathan.harris@example.com', contact: '6678901234', city: 'Charlotte', isActive: true },
      { id: 16, name: 'Olivia Martinez', email: 'olivia.martinez@example.com', contact: '7789012345', city: 'Indianapolis', isActive: false },
      { id: 17, name: 'Paul Walker', email: 'paul.walker@example.com', contact: '8890123456', city: 'Seattle', isActive: true },
      { id: 18, name: 'Quinn Hall', email: 'quinn.hall@example.com', contact: '9901234567', city: 'Denver', isActive: true },
      { id: 19, name: 'Ruby King', email: 'ruby.king@example.com', contact: '1012345678', city: 'Washington', isActive: false },
      { id: 20, name: 'Samuel Adams', email: 'samuel.adams@example.com', contact: '2113456789', city: 'Boston', isActive: true },
      { id: 21, name: 'Tina Nelson', email: 'tina.nelson@example.com', contact: '3224567890', city: 'El Paso', isActive: true }
    ];

    this.filteredItems = this.userslist; // Initially, show all users
  }

  applyFilters(): void {
    const nameTerm = this.searchName.toLowerCase();
    const emailTerm = this.searchEmail.toLowerCase();
    const cityTerm = this.searchCity.toLowerCase();

    this.filteredItems = this.userslist.filter((item: any) => {
      const nameMatch = nameTerm ? item.name.toLowerCase().includes(nameTerm) : true;
      const emailMatch = emailTerm ? item.email.toLowerCase().includes(emailTerm) : true;
      const cityMatch = cityTerm ? item.city.toLowerCase().includes(cityTerm) : true;

      return nameMatch && emailMatch && cityMatch;
    });
  }

  toggleStatus(user: any): void {
    user.isActive = !user.isActive;
    console.log(`${user.name} is now ${user.isActive ? 'Activated' : 'Deactivated'}`);
  }

  onSubmit(): void {
    this.router.navigate(['/createnew']);
  }

  /**
   * Toggles the selection of all items based on the master checkbox state.
   */
  selectAll(): void {
    this.filteredItems.forEach((item: any) => (item.selected = this.masterSelected));
    this.updateSelectedItems();
  }

  /**
   * Checks if all individual checkboxes are selected and updates the master checkbox state.
   */
  checkIfAllSelected(): void {
    this.masterSelected = this.filteredItems.every((item: any) => item.selected);
    this.updateSelectedItems();
  }

  /**
   * Updates the array of selected items based on the current checkbox state.
   */
  updateSelectedItems(): void {
    this.allSelectedItems = this.filteredItems.filter((item: any) => item.selected);
    console.log('Selected Items:', this.allSelectedItems);
  }
}
