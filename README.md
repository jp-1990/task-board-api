# Task Board API

## Summary

This API serves the Task Board frontend, and consists of an Express based REST API hosted on Azure, which serves a limited set of endpoints.

The endpoints exposed by this API allow the caller to interact with a PostgreSQL database, also hosted on Azure, storing the required data in a one-to-many relationship. A list may have many tasks, and as such, the foreign key on a task relates to the primary key of a list (both named list_id). Cascading updates and deletes are enabled to provide the functionality to delete all tasks connected to a list when the list is deleted.

An interval runs on this server to check, and update, the 'overdue' property of a task once the deadline has passed.

NOTE: API may take time to start if it has been in an idle state for some time.

## Data Structure

```
list {
  name: string
  type: 'list'
  list_id: number
}

task {
  name: string
  description: string
  deadline: string
  type: 'task'
  completed: boolean
  overdue: boolean
  task_id: number
  list_id: number (cascading update/delete foreign key)
  index: number // represents a task's index within a list
}
```

## Endpoints

Where they require arguments, all endpoint expect a body in JSON format.

### /v1/get-all-items/

Intended to run on client load to prepare data to display to the user.

```
Body: { }
Expects no arguments, returns { tasks: [ ] , lists: [ ] }
```

### /v1/create-one-list/

Create a list.

```
Body: { name: string }
returns Array<list>
```

### /v1/delete-one-list/

Delete a list.

```
Body: { id: list_id }
returns list_id of deleted list
```

### /v1/create-one-task/

Create a new task.

```
Body: {
    name: string
    description: string
    deadline: string
    index: number
    list_id: number
    }
returns Array<task>
```

### /v1/update-one-task/

Basic update of task details.

```
Body: {
    id: task_id
    name: string
    description: string
    deadline: string
    list_id: number
    }
returns Array<task>
```

### /v1/update-task-index/

Intended as a way to move tasks between lists, and adjust the order within a list.

```
Body: {
    id: task_id
    index: number
    list_id: number
    }
returns Array<task>
```

### /v1/delete-one-task/

Delete a task.

```
Body: {
    id: task_id
    }
returns task_id of deleted task
```

### /v1/complete-one-task/

Toggle the 'completed' field of a task.

```
Body: {
    id: task_id
    boolean: boolean
    }
returns Array<task>
```

### /v1/overdue-one-task/

Mark a task as overdue.

```
Body: {
    id: task_id
    }
returns Array<task>
```
