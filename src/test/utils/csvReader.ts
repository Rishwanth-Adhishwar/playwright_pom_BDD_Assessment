import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface RegisterData {
    firstName: string;
    lastName: string;
    Email: string;
    password: string;
    confirmPassword: string;
    registerSuccess: string;
}

export function readRegisterData(): RegisterData[] {
    const filePath = path.join(process.cwd(), "test-data", "registerData.csv");
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parse(fileContent, { columns: true, skip_empty_lines: true, trim: true }) as RegisterData[];
}

export interface LoginData {
    vemail: string;
    vpassword: string;
}
export function readLoginData(): LoginData[] {
    const filePath = path.join(process.cwd(), "test-data", "loginData.csv");
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parse(fileContent, { columns: true, skip_empty_lines: true, trim: true }) as LoginData[];
}