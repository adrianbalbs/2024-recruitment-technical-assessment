import heapq
from dataclasses import dataclass


@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""


def leafFiles(files: list[File]) -> list[str]:
    adjList = {file.id: [] for file in files}

    for file in files:
        if file.parent != -1:
            adjList[file.parent].append(file)

    res = []

    def dfs(fileId: int, fileName: str):
        if not adjList[fileId] and fileName not in res:
            res.append(fileName)
            return

        for childFile in adjList[fileId]:
            dfs(childFile.id, childFile.name)

    for file in files:
        dfs(file.id, file.name)

    return res


"""
Task 2
"""


def kLargestCategories(files: list[File], k: int) -> list[str]:
    counts = {}
    for file in files:
        for category in file.categories:
            counts[category] = counts.get(category, 0) + 1

    # We negate the count as python only implements min heaps,
    # this is a workaround to be able to use a max heap
    freq = []
    for category, count in counts.items():
        heapq.heappush(freq, (-count, category))

    res = []
    for _ in range(0, k):
        _, categories = heapq.heappop(freq)
        res.append(categories)
    return res


"""
Task 3
"""


def largestFileSize(files: list[File]) -> int:
    adjList = {file.id: [] for file in files}

    for file in files:
        if file.parent != -1:
            adjList[file.parent].append(file)

    totals = {}

    def dfs(file: File):
        if not adjList[file.id]:
            return file.size

        total = file.size
        for childFile in adjList[file.id]:
            total += dfs(childFile)

        return total

    for file in files:
        totals[file.id] = dfs(file)

    return max(totals.values())


if __name__ == "__main__":
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4",
    ]

    assert kLargestCategories(testFiles, 3) == ["Documents", "Folder", "Media"]

    assert largestFileSize(testFiles) == 20992
