import { Injectable } from '@angular/core';
import { Registration } from '../elements/registration';
import { RegistrationHttpService } from './registration-http.service';

@Injectable()
export class RegistrationService {

  reservation: Registration;


  constructor(private registrationHttpService: RegistrationHttpService) {
    this.reservation = new Registration();
    this.registrationHttpService = registrationHttpService;
  }

  getRegistrationNext() {
    return this.registrationHttpService.getRegistrationNext();
  }

  addUser(name: string): void {
    if (name) {
      this.reservation.addUser(name);
      this.registrationHttpService.updateRegistration(this.reservation);
    }
  }

  addUnavailableUser(name: string): void {
    if (name) {
      this.reservation.addUnavailableUser(name);
      this.registrationHttpService.updateRegistration(this.reservation)
    }
  }

  putUserOnStandby(name: string): void {
    if (name) {
      this.reservation.addUncertainUser(name);
      this.registrationHttpService.updateRegistration(this.reservation);
    }
  }

  getAvailableUsers(): String[] {
    return this.reservation.getAvailableUsers();
  }

  getUncertainUsers(): String[] {
    return this.reservation.getUncertainUsers();
  }

  getUnavailableUsers(): String[] {
    return this.reservation.getUnavailableUsers();
  }

  deleteAvailableUser(name: string): void {
    if (name) {
      this.reservation.deleteAvailableUserByName(name);
      this.registrationHttpService.updateRegistration(this.reservation);
    }
  }

  deleteUncertainUser(name: string): void {
    if (name) {
      this.reservation.deleteUncertainUserByName(name);
      this.registrationHttpService.updateRegistration(this.reservation);
    }
  }

  deleteUnavailableUser(name: string): void {
    if (name) {
      this.reservation.deleteUnavailableUserByName(name);
      this.registrationHttpService.updateRegistration(this.reservation);
    }
  }

  setRegistration(registrationData: any) {
    this.reservation = new Registration(
      registrationData._id,
      registrationData.not_participants,
      registrationData.participants,
      registrationData.uncertains,
      registrationData.end_at,
      registrationData.date
    );
  }

}