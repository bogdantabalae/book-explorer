import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ProfileComponent implements OnInit {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'This is a short bio about the user.',
  };

  constructor() {}

  ngOnInit(): void {
    // Load profile from localStorage if available
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  updateProfile(newName: string, newEmail: string, newBio: string): void {
    // Update profile in the component
    this.profile.name = newName;
    this.profile.email = newEmail;
    this.profile.bio = newBio;

    // Save updated profile to localStorage
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }
}
