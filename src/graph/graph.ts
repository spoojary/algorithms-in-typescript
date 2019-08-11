
export class Vertex {
    private id: number;
    private adjecentNodes:Vertex[] = [];

    public Vertex(id: number) {
        this.id = id;
    }

    public addAdjecent(vertex: Vertex) {
        this.adjecentNodes.push(vertex);
    }
}