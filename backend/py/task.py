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
    # Maps an empty list to the file ids
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
    # Preprocessing to add all categories into a list
    categories = []
    for file in files:
        categories += file.categories

    counts = {}
    for category in categories:
        counts[category] = counts.get(category, 0) + 1

    # Bucket sort to organise the categories, indexed by the count.
    # The max count can only be at most the total number of categories present
    frequencies = [[] for _ in range(len(categories) + 1)]
    for category, count in counts.items():
        frequencies[count].append(category)

    # the bucket sort allows us to linerally scan, which is better than using a heap,
    # but having duplicate counts will make the worst case time complexity
    # higher due to the sorting categories requirement
    res = []
    for i in range(len(frequencies) - 1, 0, -1):
        sortedFrequencies = sorted(frequencies[i])
        for category in sortedFrequencies:
            res.append(category)
            if len(res) == k:
                return res

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

    def dfs(file: File) -> int:
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
