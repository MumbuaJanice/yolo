provider "google" {
  project = "your_project_id"
  region  = "your_region"
}

resource "google_compute_instance" "vm_instance" {
  name         = "instance-name"
  machine_type = "machine-type"
  zone         = "zone"

  boot_disk {
    initialize_params {
      image = "image-url"
    }
  }

  network_interface {
    network = "default"
    access_config {
    }
  }
}
