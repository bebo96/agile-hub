async function taskFormHandler(event) {
  event.preventDefault();

  const task_text = document.querySelector('textarea[name="task-body"]').value.trim();
  const project_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (task_text) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        project_id,
        task_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.task-form').addEventListener('submit', taskFormHandler);