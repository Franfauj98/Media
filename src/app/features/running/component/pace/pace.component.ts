import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pace',
  templateUrl: './pace.component.html',
  styleUrl: './pace.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class PaceComponent {
  // Première card
  paceSeconds: number = 300; // 5:00 en secondes
  distance: number = 10; // Valeur initiale 10 km
  totalTime: string = '';
  error: string = '';

  // Seconde card
  durationSeconds: number = 3600; // 1h en secondes
  distance2: number = 10; // Valeur initiale 10 km
  paceResult: string = '';
  error2: string = '';

  constructor() {
    this.calculateTime();
    this.calculatePace();
  }

  // Première card
  onPaceSliderChange() {
    this.calculateTime();
  }
  setDistance(val: number) {
    this.distance = val;
    this.calculateTime();
  }
  get paceLabel(): string {
    const min = Math.floor(this.paceSeconds / 60);
    const sec = this.paceSeconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }
  private parsePaceSlider(): number {
    return this.paceSeconds / 60; // minutes décimales
  }
  calculateTime() {
    this.error = '';
    const paceMin = this.parsePaceSlider();
    if (this.paceSeconds < 180 || this.paceSeconds > 480 || this.distance < 1 || this.distance > 42) {
      this.totalTime = '';
      this.error = 'Veuillez sélectionner un rythme et une distance valides.';
      return;
    }
    const totalMinutes = paceMin * this.distance;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60);
    this.totalTime = `${hours}h ${minutes}m ${seconds}s`;
  }

  // Seconde card
  onDurationSliderChange() {
    this.calculatePace();
  }
  setDistance2(val: number) {
    this.distance2 = val;
    this.calculatePace();
  }
  get durationLabel(): string {
    const h = Math.floor(this.durationSeconds / 3600);
    const m = Math.floor((this.durationSeconds % 3600) / 60);
    return `${h}h ${m.toString().padStart(2, '0')}m`;
  }
  calculatePace() {
    this.error2 = '';
    if (this.durationSeconds < 600 || this.durationSeconds > 21600 || this.distance2 < 1 || this.distance2 > 42) {
      this.paceResult = '';
      this.error2 = 'Veuillez sélectionner un temps et une distance valides.';
      return;
    }
    const paceSec = Math.round(this.durationSeconds / this.distance2);
    const min = Math.floor(paceSec / 60);
    const sec = paceSec % 60;
    this.paceResult = `${min}:${sec.toString().padStart(2, '0')} min/km`;
  }

  onPaceInputChange(event: any) {
    const value = event.target.value;
    const match = value.match(/^(\d{1,2}):(\d{2})$/);
    if (match) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      if (!isNaN(min) && !isNaN(sec) && sec < 60) {
        const totalSec = min * 60 + sec;
        if (totalSec >= 180 && totalSec <= 480) {
          this.paceSeconds = totalSec;
          this.calculateTime();
        }
      }
    }
  }

  onDurationInputChange(event: any) {
    const value = event.target.value;
    const match = value.match(/^(\d{1,2})h\s?(\d{1,2})m?$/);
    if (match) {
      const h = parseInt(match[1], 10);
      const m = parseInt(match[2], 10);
      if (!isNaN(h) && !isNaN(m)) {
        const totalSec = h * 3600 + m * 60;
        if (totalSec >= 600 && totalSec <= 21600) {
          this.durationSeconds = totalSec;
          this.calculatePace();
        }
      }
    }
  }
}
