export default interface Connection {
    query(statment: string, params: any): Promise<any>;
    close (): Promise<void>;
}