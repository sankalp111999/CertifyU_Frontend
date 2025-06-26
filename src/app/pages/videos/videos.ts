import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './videos.html',
  styleUrls: ['./videos.css']
})
export class Videos {
  searchTerm = '';

  videoList = [
    {
      title: 'SQL - Complete Course in 3 Hours | SQL One Shot using MySQL',
      img: 'https://img.youtube.com/vi/VIDEO_ID1/0.jpg',
      url: 'https://www.youtube.com/watch?v=hlGoQC332VM&t=108s'
    },
    {
      title: 'Fetch B2C Users with .NET Core & Graph API',
      img: 'https://img.youtube.com/vi/VIDEO_ID2/0.jpg',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID2'
    },
    {
      title: 'Protect Azure Storage with SAS Token in .NET Core',
      img: 'https://img.youtube.com/vi/VIDEO_ID3/0.jpg',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID3'
    },
    // Add more items similarly
  ];

  get filteredVideos() {
    const term = this.searchTerm.trim().toLowerCase();
    return term
      ? this.videoList.filter(v => v.title.toLowerCase().includes(term))
      : this.videoList;
  }
}

