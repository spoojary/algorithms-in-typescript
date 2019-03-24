export class BstNode {
    constructor(
        key: number,
        left: BstNode = null,
        right: BstNode = null
    ) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    key: number;
    left: BstNode;
    right: BstNode;
}

export function insertToBst(
    root: BstNode,
    num: number
) {
    if (!root) {
        root = new BstNode(num);
        return root;
    }

    if (root.key >= num) {
        root.left = insertToBst(root.left, num);
    }

    if (root.key < num) {
        root.right = insertToBst(root.right, num);
    }

    return root;
};

export function readAllOrdered(root: BstNode): number[] {
    if(root === null) return [];

    const orderedNumbers: number[] = [];
    if(root.left) orderedNumbers.push(...readAllOrdered(root.left));
    orderedNumbers.push(root.key);
    if(root.right) orderedNumbers.push(...readAllOrdered(root.right));
    
    return orderedNumbers;
}

export function bstSort(nums: number[]): number[] {
    let root;
    nums.forEach((n: number) => {
        root = insertToBst(root, n);
        console.log('root', root);
    });
     //const insertToBst(root, )
    return readAllOrdered(root);
}
