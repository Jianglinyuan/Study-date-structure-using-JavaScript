function BinarySearchTree(){
    var Node = function (key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    var insertNode = function (node,newNode){
      if (newNode.key<node.key) {
          if (node.left==null){
              node.left=newNode;
          }else{
              insertNode(node.left,newNode);
          }
      }else {
          if(node.right==null){
              node.right=newNode;
          }else{
              insertNode(node.right,newNode);
          }
      }
    };

    var inOrderTraverseNode = function (node,callback){
        if (node!=null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    };

    this.inset=function(key){
      var newNode = new Node(key);

        if(root==null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    };

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback);
    }
}

var tree = new BinarySearchTree();

tree.inset(5);
tree.inset(2);
tree.inset(3);
tree.inset(4);
tree.inset(11);
tree.inset(6);
tree.inset(9);
tree.inset(10);
tree.inset(14);
tree.inset(1);
tree.inset(15);
tree.inset(8);

function printNode (value){
    console.log(value);
}

tree.inOrderTraverse(printNode)