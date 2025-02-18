function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextNode = node.next
    return collection[nextNode]
}

function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList]

    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection)
    let index = 0
    while (currentNode != node) {
        index++
        currentNode = next(currentNode, collection)
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let previousNode;
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        previousNode = currentNode
        currentNode = next(currentNode, collection)
    }
    previousNode.next = currentNode.next
}