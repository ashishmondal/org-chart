export interface IEmployee {
	name: string;
	designation: string;
	subordinates: IEmployee[];
}

export class Employee implements IEmployee {
	name: string;
	designation: string;
	subordinates: Employee[];
	manager?: Employee;
	constructor(orgStructure: string[], manager?: Employee) {
		this.manager = manager;
		const [name, ...reports] = orgStructure;
		this.name = name.split('(')[0].trim();
		const desigMatch = name.match(/\(([^)]+)\)/);
		this.designation = desigMatch && desigMatch[1].trim();

		this.subordinates = reports.map(r => r.substring(1))
			.reduce((previous, current) => {
				if (!current.startsWith(' ')) {
					previous.push([]);
				}

				previous[previous.length - 1].push(current);

				return previous;
			}, <string[][]>[])
			.map(r => new Employee(r, this));
	}
}
