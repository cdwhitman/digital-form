import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branchFilter',
})
export class BranchFilterPipe implements PipeTransform {
  transform(users: any[], branchSelect: string, branch: string): any[] {
    if (!users) return [];
    if (!branchSelect) return users;

    branchSelect = branchSelect.toLowerCase();

    return users.filter((user) => {
      if (user && user[branch]) {
        return user[branch].toLowerCase().includes(branchSelect);
      }
      return false;
    });
  }
}
