using System;

namespace Domain;

public class Activity
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    public string Title { get; set; }

    public DateTime Date { get; set; }

    public string Description { get; set; }

    public string Category { get; set; }    

    public bool IsCancelled { get; set; }

    //location props
    public string City { get; set; }
    public string Venue { get; set; }

    public string Latitude { get; set; }

    public string Longitude { get; set; }
}
