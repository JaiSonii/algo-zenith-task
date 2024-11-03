export const chapters = [
    {
        title : 'Chapter 1',
        duration : 18000,
        parts : [
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            },
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            },
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            }
        ]
    },
    {
        title : 'Chapter 2',
        duration : 18000,
        parts : [
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            }
        ]
    },
    {
        title : 'Chapter 3',
        duration : 18000,
        parts : [
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            }
        ]
    },
    {
        title : 'Chapter 4',
        duration : 18000,
        parts : [
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            }
        ]
    },
    {
        title : 'Chapter 5',
        duration : 18000,
        parts : [
            {
                title : 'Lorem ipsum dolor sit amet',
                duration : 7200,
                difficulty : 'Medium',
                noOfModules : 5,
                precentComplete : 45,
                content : [
                    {
                        type : 'video',
                        title : 'Video 1',
                        duration : 600
                    },
                    {
                        type : 'article',
                        title : 'Article 1',
                        duration : 600
                    },
                    {
                        type : 'quiz',
                        title : 'Quiz 1',
                        duration : 600
                    },
                    {
                        type : 'codingExercise',
                        title : 'Coding Exercise 1',
                        duration : 600
                    },
                    {
                        type : 'combined',
                        title : 'Combined Resource 1',
                        duration : 600
                    }
                ]
            }
        ]
    },
]

export function secondsToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    // Return based on whether hours are present
    if (hours > 0) {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    } else {
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}



